import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://puckhulgftuosunkeunu.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1Y2todWxnZnR1b3N1bmtldW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NTYxMTQsImV4cCI6MjA1NzIzMjExNH0.ekV65ofIzo7syfxqYCrHv-QgA3nhzFUBoI3AEYV_xzI'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: favbooks, error } = await supabase
    .from('favbooks')
    .select('*')
  let bookList = document.getElementById('favbooks');
  
  for (let book of favbooks) {
     bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
   }
}

getBooks();