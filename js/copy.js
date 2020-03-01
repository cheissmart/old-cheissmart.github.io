(() => {
  const { author } = window.AD_CONFIG;

  document.addEventListener('copy', e => {
    let clipboardData = e.clipboardData || window.clipboardData;
    if(!clipboardData) {
      return;
    }

    const selection = window.getSelection().toString();
    if(selection.length <= 42) {
      return;
    }

    e.preventDefault();

    const textData = selection + '\n\n'
      + (author ? `author: ${author}\n` : '')
      + 'link: ' + window.location.href + '\n'
      + 'source: ' + window.location.host + '\n'
      + 'Copyright belongs to the author. For commercial reprints, please contact the author for authorization. For non-commercial reprints, please indicate the source.。\n\n';

    const htmlData = selection + '<br/><br/>'
      + (author ? `<b>author</b>: ${author}<br/>` : '')
      + `<b>link</b>: <a href="${window.location.href}">${window.location.href}</a><br/>`
      + `<b>source</b>: <a href="${window.location.origin}">${window.location.host}</a><br/>`
      + 'Copyright belongs to the author. For commercial reprints, please contact the author for authorization. For non-commercial reprints, please indicate the source.。<br/>';

      clipboardData.setData('text/html', htmlData);
      clipboardData.setData('text/plain', textData);
  });
})();