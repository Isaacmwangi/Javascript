function parseURL(url) {
    let parser = document.createElement('a');
    parser.href = url;
    return {
      protocol: parser.protocol,
      host: parser.host,
      hostname: parser.hostname,
      port: parser.port,
      pathname: parser.pathname,
      search: parser.search,
      hash: parser.hash,
    };
  }
  
  // Example usage:
  console.log(parseURL('https://www.w3schools.com/js/js_intro.asp'));
  