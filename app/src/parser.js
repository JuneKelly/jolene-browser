import * as Commonmark from 'commonmark';

export function parsePage(pageText) {
  var reader = new Commonmark.Parser();
  var writer = new Commonmark.HtmlRenderer({safe: true});
  var parsed = reader.parse(pageText);
  var result = writer.render(parsed);
  return result;
}
