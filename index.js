import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://puckhulgftuosunkeunu.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1Y2todWxnZnR1b3N1bmtldW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NTYxMTQsImV4cCI6MjA1NzIzMjExNH0.ekV65ofIzo7syfxqYCrHv-QgA3nhzFUBoI3AEYV_xzI'

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