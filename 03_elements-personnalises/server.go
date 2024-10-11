package main

import (
	"fmt"
	"log"
	"net/http"
	"regexp"
	"unicode/utf8"
)

func main() {
	mux := http.NewServeMux()
	mux.Handle("GET /", http.FileServer(http.Dir(".")))
	mux.HandleFunc("POST /api/validate/password", validatePassword)
	mux.HandleFunc("POST /api/validate/email", validateEmail)
	fmt.Println("Server listening at http://localhost:4000")
	err := http.ListenAndServe(":4000", logRequest(mux))
	log.Fatal(err)
}

var EmailRX = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

func validateEmail(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
		return
	}
	emailValues, ok := r.PostForm["email"]
	if !ok {
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
		return
	}
	email := emailValues[0]
	if !EmailRX.MatchString(email) {
		w.WriteHeader(http.StatusUnprocessableEntity)
		fmt.Fprint(w, "This field must be a valid email address")
		return
	}
}

func validatePassword(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}
	passwordValues, ok := r.PostForm["password"]
	if !ok {
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
		return
	}
	password := passwordValues[0]
	if utf8.RuneCountInString(password) < 8 {
		w.WriteHeader(http.StatusUnprocessableEntity)
		fmt.Fprint(w, "This field must contain at least 8 characters")
		return
	}
}

func logRequest(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%v %v\n", r.Method, r.URL.RequestURI())
		next.ServeHTTP(w, r)
	})
}
