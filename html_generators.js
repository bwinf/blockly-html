"use strict";


var HtmlGenerator = new Blockly.Generator('HTML');

HtmlGenerator.init = function(workspace) {};
HtmlGenerator.finish = function(code) {return code;};

HtmlGenerator.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};


HtmlGenerator['baseframe'] = function(block) {
  var statements_head = HtmlGenerator.statementToCode(block, 'head');
  var statements_body = HtmlGenerator.statementToCode(block, 'body');

  var code = '<!DOCTYPE HTML>\n<html>\n<head>\n  <meta charset="utf-8">\n'
    + statements_head
    + "</head>\n\n<body>\n"
    + statements_body
    + "</body>\n</html>\n";

  return code;
};

HtmlGenerator['html'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<!DOCTYPE HTML>\n<html>\n' + statements_content + '</html>\n';
  return code;
};

HtmlGenerator['body'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<body>\n' + statements_content + '</body>\n';
  return code;
};

HtmlGenerator['head'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<head>\n  <meta charset="utf-8">\n' + statements_content + '</head>\n';
  return code;
};

HtmlGenerator['title'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');

  if (statements_content != "")
    document.getElementById('title').innerText = statements_content;
  else
    document.getElementById('title').innerText = "untitled web page";

  var code = '<title>' + statements_content + '</title>\n';
  return code;
};

HtmlGenerator['paragraph'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<p>' + statements_content + '</p>\n';
  return code;
};

HtmlGenerator['plaintext'] = function(block) {
  var text_content = block.getFieldValue('content');
  var code = text_content;
  return code;
};

HtmlGenerator['division'] = function(block) {
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<div' + value_name + '>' + statements_content + '</div>\n';
  return code;
};

HtmlGenerator['style'] = function(block) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = ' style="' + statements_name + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator['color'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'color: ' + colour_name + ';';
  return code;
};

HtmlGenerator['bgcolour'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'background-color: ' + colour_name + ';';
  return code;
};

HtmlGenerator['genericstyle'] = function(block) {
  var text_property = block.getFieldValue('property');
  var text_value = block.getFieldValue('value');
  var code = text_property + ': ' + text_value + ';';
  return code;
};

HtmlGenerator['generictag'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<' + text_name + value_name + '>\n' + statements_content + '</' + text_name + '>\n';
  return code;
};

HtmlGenerator['more_attributes'] = function(block) {
  var value_name1 = HtmlGenerator.valueToCode(block, 'NAME1', HtmlGenerator.ORDER_ATOMIC);
  var value_name2 = HtmlGenerator.valueToCode(block, 'NAME2', HtmlGenerator.ORDER_ATOMIC);
  var value_name3 = HtmlGenerator.valueToCode(block, 'NAME3', HtmlGenerator.ORDER_ATOMIC);
  var code = value_name1 + value_name2 + value_name3;
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator['genericattribute'] = function(block) {
  var text_attribute = block.getFieldValue('attribute');
  var text_value = block.getFieldValue('value');
  var code = ' ' + text_attribute + '="' + text_value + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator['link'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<a href="' + text_name + '">' + statements_content + '</a>\n';
  return code;
};

HtmlGenerator['span'] = function(block) {
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<span' + value_name + '>' + statements_content + '</span>\n';
  return code;
};

HtmlGenerator['image'] = function(block) {
  var text_image = block.getFieldValue('IMAGE');
  var text_alt = block.getFieldValue('ALT');
  var code = '<img src="' +  text_image + '" alt="' + text_alt + '">\n';
  return code;
};

HtmlGenerator['emphasise'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<em>' + statements_content + '</em>\n';
  return code;
};

HtmlGenerator['strong'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<strong>' + statements_content + '</strong>\n';
  return code;
};

HtmlGenerator['headline'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<' + dropdown_name + '>' + statements_content + '</' +  dropdown_name + '>\n';
  return code;
};


HtmlGenerator['linebreak'] = function(block) {
  var code = '<br>\n';
  return code;
};

HtmlGenerator['horizontalbreak'] = function(block) {
  var code = '<hr>\n';
  return code;
};

HtmlGenerator['unorderedlist'] = function(block) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = '<ul>\n' + statements_name + '</ul>\n';
  return code;
};

HtmlGenerator['orderedlist'] = function(block) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = '<ol>\n' + statements_name + '</ol>\n';
  return code;
};

HtmlGenerator['listelement'] = function(block) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<li>' + statements_content + '</li>\n';
  return code;
};
