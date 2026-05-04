"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=v(function(w,s){"use strict";var o=require("@stdlib/number-float64-base-to-float32");function h(e,r){var t,f,a,n,i;if(n=r.length,n===0)return 0;if(n===1)return o(.5*r[0]);for(t=r[0],f=0,a=0,i=1;i<n;i++)a=f,f=t,t=o(o(o(e*f)-a)+r[i]);return o(.5*o(t-a))}s.exports=h});var _=v(function(R,b){"use strict";var y=require("@stdlib/number-float64-base-to-float32"),q=require("@stdlib/array-float32"),c=require("@stdlib/function-ctor"),x=u();function F(e){var r,t,f;if(e=new q(e),e.length>500)return a;if(r="return function chebyshevSeriesf(x){",r+="var b0;",r+="var b1;",r+="var b2;",t=e.length,t===0)r+="return 0.0;";else if(t===1)r+="return f64_to_f32(0.5 * "+e[0]+");";else{for(r+="b0 = "+e[0]+";",r+="b1 = 0.0;",f=1;f<t;f++)r+="b2 = b1;",r+="b1 = b0;",r+="b0 = f64_to_f32(f64_to_f32(f64_to_f32(x*b1) - b2) + "+e[f]+");";r+="return f64_to_f32(0.5 * f64_to_f32(b0 - b2));"}return r+="};",r+="//# sourceURL=chebyshevSeriesf.factory.js",new c("f64_to_f32",r)(y);function a(n){return x(n,e)}}b.exports=F});var S=require("@stdlib/utils-define-nonenumerable-read-only-property"),l=u(),g=_();S(l,"factory",g);module.exports=l;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, and license are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
