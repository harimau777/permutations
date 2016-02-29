    /** Generate all combination of arguments from array using functional programming instead of recursive
    * @param {Object} opts    - An array or arrays with keys describing options  [['Ben','Jade','Darren'],['Smith','Miller']]
    * @returns {Array}        - An array of arrays e.g. [['Ben','Smith'],[..]]
    **/
    function cartesianProductOf(opts) {
        if (arguments.length>1) opts=arguments;
        return _.reduce(opts, function(a, b) {
            return _.flatten(_.map(a, function(x) {
                return _.map(b, function(y) {
                    return x.concat([y]);
                });
            }), true);
        }, [ [] ]);
    };


    /** Generate all combination of arguments from objects using functional programming instead of recursive
      * @param {Object} opts    - An object or arrays with keys describing options  {firstName:['Ben','Jade','Darren'],lastName:['Smith','Miller']}
      * @returns {Array}        - An array of objects e.g. [{firstName:'Ben',LastName:'Smith'},{..]
      **/
    function cartesianProductObj(optObj){
        var opts = _.values(optObj);
        var keys = _.keys(optObj);
        var combs = cartesianProductOf(opts);
        return _.map(combs,function(comb){
            return _.zipObject(keys,comb);
        });
    }