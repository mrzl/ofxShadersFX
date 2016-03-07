// The MIT License (MIT)
// Copyright (c) 2016 Alexandre Baron (Scylardor)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#version 120
#extension GL_ARB_texture_rectangle: enable

uniform sampler2DRect tex0;
uniform sampler2DRect tex1;
uniform float blendAlpha;

void main(void) {
    vec2 texcoord = gl_TexCoord[0].xy;
    vec4 background = texture2DRect(tex0, texcoord);
    vec4 foreground = texture2DRect(tex1, texcoord);
    gl_FragColor = foreground * blendAlpha + background;
}
