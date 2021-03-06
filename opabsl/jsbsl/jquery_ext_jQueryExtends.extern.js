/*
    Copyright © 2011 MLstate

    This file is part of OPA.

    OPA is free software: you can redistribute it and/or modify it under the
    terms of the GNU Affero General Public License, version 3, as published by
    the Free Software Foundation.

    OPA is distributed in the hope that it will be useful, but WITHOUT ANY
    WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for
    more details.

    You should have received a copy of the GNU Affero General Public License
    along with OPA. If not, see <http://www.gnu.org/licenses/>.
*/

/*
   @author Francois Pessaux
*/

/**
  This file provides prototypes for function added by side effect to jQuery
  by /opabsl/jsbsl/jQueryExtends.js.
  This code is not intended to be compiled and included in any binary, it only
  serves to the Google Closure Compiler checker by giving it prototypes, hence
  avoiding warnings.
  In case the Google Closure Compiler checker is not more used by the build
  system, this source file can be discarded from the Opa sources tree.
  This source file is involved by the build system build_rules.ml for 2 rules:
   - rule "Client lib JS validation"
   - rule "opa-bslgenMLRuntime JS validation"
**/



/**
 * @param {string} evt_name
 * @param {!Function} callback
 */
jQuery.prototype.opabind = function(evt_name, callback) {};

Element.prototype.style.MozTransformOrigin = '' ;

Element.prototype.style.msTransformOrigin = '' ;

Element.prototype.style.MozTransform = '' ;

Element.prototype.style.msTransform = '' ;
 
