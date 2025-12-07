const markDownInput = document.querySelector("#markdown-input");

markDownInput.addEventListener("input", ()=>{ 
  const converted = convertMarkdown();
  showRawOutput(converted);
})

const blockRules = [
  {
    name : "title",
    regex: /^(#{1,6})\s+(.+)/,
    replacement: match => {
      const level = match[1].length;
      const content = match[2];
      return `<h${level}>${applyInline(content)}</h${level}>`;
    }
  },
  {
    name : "quote",
    regex: /^>\s?(.+)/,
   replacement: match => {
      const inner = applyInline(match[1]); // aplica bold/italic/link/img aqui
      return `<blockquote>${inner}</blockquote>`;
    }
  }
];

function applyInline(text){
    let result = text;
    for (let rule of inlineRules) {
        result = result.replace(rule.regex, rule.replacement);
  }
  return result;
}

const inlineRules = [
{
    regex: /\*\*(.+?)\*\*|__(.+?)__/g,
    replacement: '<strong>$1$2</strong>'
  },
  {
    regex: /\*(?!\*)([^*]+?)\*(?!\*)|_(?!_)([^_]+?)_(?!_)/g, //italic
    replacement: '<em>$1$2</em>'
  },
  {
    regex: /!\[(.+?)\]\((.+?)\)/g, //img
    replacement: '<img alt="$1" src="$2">'
  },
    {
    regex: /\[(.+?)\]\((.+?)\)/g, //link
    replacement: '<a href="$2">$1</a>'
  },
];

function convertMarkdown(){
  let result = "";
  const lines = markDownInput.value.split("\n");

  lines.forEach( line =>{
    let converted = line;

    for (let rule of blockRules) {
        const match = converted.match(rule.regex);
        if (match) {
            converted = rule.replacement(match);
            result += converted + "\n";
            return;
        }
    }
    converted = applyInline(line);
    result += converted + "\n";
      
  });
  return result.trim();
}


function showRawOutput(string) {
const htmlOutput = document.querySelector("#html-output");

htmlOutput.textContent = string;

const preview = document.querySelector("#preview");
preview.innerHTML = string; 

}



