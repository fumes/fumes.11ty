/* eslint no-var:0 */
'use strict';

module.exports = CaptureTag;
function CaptureTag() {
    this.tags = ['capture'];
    this.parse = parse;
    this.run = run;

    function parse(parser, nodes) {
        var tok;
        var args;
        var body;

        tok = parser.nextToken();
        args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        body = parser.parseUntilBlocks('endcapture');
        parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);
    }

    function run(context, args, body) {
        if (args && 'as' in args) {
            context.ctx[args.as] = body(); // eslint-disable-line no-param-reassign
        } else {
            throw new Error('Expected an "as" argument in capture tag');
        }
    }
}
