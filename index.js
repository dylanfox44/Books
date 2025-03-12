import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://eunwothedikttpuoslnr.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bndvdGhlZGlrdHRwdW9zbG5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NzQyOTQsImV4cCI6MjA1NzE1MDI5NH0.-J9GgbAFhSlN2be-lakGlRM9w3P9j2q9g1aYBZJ61X8'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  let bookList = document.getElementById('books');
  
  for (let book of books) {
     bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.created_at}</td></tr>`;
   }
}

getBooks();