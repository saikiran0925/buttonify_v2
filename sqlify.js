document.getElementById('formatButton').addEventListener('click', () => {
    const sqlInput = document.getElementById('sqlInput');
    const formattedSQL = formatSQL(sqlInput.value);
    sqlInput.value = formattedSQL;
  });
  
  document.getElementById('stringifyButton').addEventListener('click', () => {
    const sqlInput = document.getElementById('sqlInput');
    const stringifySQL = stringifySQLQuery(sqlInput.value);
    sqlInput.value = stringifySQL;
  });
  
  document.getElementById('copyButton').addEventListener('click', () => {
    const sqlInput = document.getElementById('sqlInput');
    sqlInput.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    const copyButton = document.getElementById('copyButton');
    copyButton.innerText = 'Copied';
    copyButton.classList.add('copied');
    setTimeout(() => {
      copyButton.innerText = 'Copy';
      copyButton.classList.remove('copied');
    }, 1500);
  });
  
  function formatSQL(sql) {
    const formattedQuery = sql.replace(/[\+""]/g, '');
  
    const lines = formattedQuery.split('\n').map(line => line.trim());
  
    let indentLevel = 0;
    let indentedQuery = '';
  
    lines.forEach(line => {
      if (line.includes('(')) {
        indentedQuery += '  '.repeat(indentLevel) + line + '\n';
        indentLevel++;
      } else if (line.includes(')')) {
        indentLevel--;
        indentedQuery += '  '.repeat(indentLevel) + line + '\n';
      } else {
        indentedQuery += '  '.repeat(indentLevel) + line + '\n';
      }
    });
  
    return indentedQuery.trim();
  }
  
  function stringifySQLQuery(sql) {
    return sql.replace(/\n\s*/g, ' ');
  }
  