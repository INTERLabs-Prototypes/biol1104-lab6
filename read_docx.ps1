$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("d:\Documents\Personal\Arlene\Inter\BIOL 1104\BIOL 1104 Labs\Lab #6\01_BIOL1104_HojaEN-Lab6.docx")
$text = $doc.Content.Text
$text | Out-File -Encoding utf8 "d:\Documents\Personal\Arlene\Inter\BIOL 1104\BIOL 1104 Labs\Lab #6\lab6_content.txt"
$doc.Close($false)
$word.Quit()
