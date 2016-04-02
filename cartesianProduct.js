
import _ from 'lodash'

/**
 * Generate all combination of arguments when given arrays or strings
 * e.g. [['Ben','Jade','Darren'],['Smith','Miller']] to [['Ben','Smith'],[..]]
 * e.g. 'the','cat' to [['t', 'c'],['t', 'a'], ...]
**/
function _cartesianProductOf(args) {
    if (arguments.length>1) args=_.toArray(arguments);

    // strings to arrays of letters
    args=_.map(args, opt=>typeof opt==='string'?_.toArray(opt):opt)

    return _.reduce(args, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return _.concat(x,[y]);
            });
        }), true);
    }, [ [] ]);
}

/** Generate all combination of arguments from objects
  * @param {Object} opts    - An object or arrays with keys describing options  {firstName:['Ben','Jade','Darren'],lastName:['Smith','Miller']}
  * @returns {Array}        - An array of objects e.g. [{firstName:'Ben',LastName:'Smith'},{..]
  **/
function _cartesianProductObj(optObj){
    var keys = _.keys(optObj);
    var opts = _.values(optObj);
    var combs = _cartesianProductOf(opts);
    return _.map(combs,function(comb){
        return _.zipObject(keys,comb);
    });
}

/**
 * Generate the cartesian product of input objects, arrays, or strings
 *
 * @example
 *
 * product('me','hi')
 * // => [["m","h"],["m","i"],["e","h"],["e","i"]]
 *
 * product([1,2,3],['a','b','c']
 * // => [[1,"a"],[1,"b"],[1,"c"],[2,"a"],[2,"b"],[2,"c"],[3,"a"],[3,"b"],[3,"c"]]
 *
 * product({who:['me','you'],say:['hi','by']})
 * // => [{"who":"me","say":"hi"},{"who":"me","say":"by"},{"who":"you","say":"hi"},{"who":"you","say":"by"}]
 *
 * // It also takes in a single array of args
 * product(['me','hi'])
 * // => [["m","h"],["m","i"],["e","h"],["e","i"]]
 */
export function product(opts){
    if (arguments.length==1 && !_.isArray(opts))
        return _cartesianProductObj(opts)
    else
        return _cartesianProductOf(opts)
}

// product('me','hi')
// product({who:['me','you'],say:['hi','by']})
// product({who:['me','you'],say:['hi','by']})
// product(['me','hi'])
