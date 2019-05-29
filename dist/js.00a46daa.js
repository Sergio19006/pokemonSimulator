// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../images/001.png":[function(require,module,exports) {
module.exports = "/001.99ace415.png";
},{}],"../images/002.png":[function(require,module,exports) {
module.exports = "/002.c2159219.png";
},{}],"../images/004.png":[function(require,module,exports) {
module.exports = "/004.49405168.png";
},{}],"../images/003.png":[function(require,module,exports) {
module.exports = "/003.a5ef3ef7.png";
},{}],"../images/005.png":[function(require,module,exports) {
module.exports = "/005.e6468c36.png";
},{}],"../images/006.png":[function(require,module,exports) {
module.exports = "/006.78d433b2.png";
},{}],"../images/007.png":[function(require,module,exports) {
module.exports = "/007.d3f2ac34.png";
},{}],"../images/008.png":[function(require,module,exports) {
module.exports = "/008.0bce3eb6.png";
},{}],"../images/009.png":[function(require,module,exports) {
module.exports = "/009.c567b283.png";
},{}],"../images/010.png":[function(require,module,exports) {
module.exports = "/010.d676d9dc.png";
},{}],"../images/011.png":[function(require,module,exports) {
module.exports = "/011.d699fbcf.png";
},{}],"../images/012.png":[function(require,module,exports) {
module.exports = "/012.fe2e7d7f.png";
},{}],"../images/013.png":[function(require,module,exports) {
module.exports = "/013.cfd0bf40.png";
},{}],"../images/014.png":[function(require,module,exports) {
module.exports = "/014.d45ddeec.png";
},{}],"../images/015.png":[function(require,module,exports) {
module.exports = "/015.364de55e.png";
},{}],"../images/016.png":[function(require,module,exports) {
module.exports = "/016.778213f4.png";
},{}],"../images/017.png":[function(require,module,exports) {
module.exports = "/017.83ffc025.png";
},{}],"../images/018.png":[function(require,module,exports) {
module.exports = "/018.fa6f7050.png";
},{}],"../images/019.png":[function(require,module,exports) {
module.exports = "/019.7ce72577.png";
},{}],"../images/020.png":[function(require,module,exports) {
module.exports = "/020.23f2da2d.png";
},{}],"../images/021.png":[function(require,module,exports) {
module.exports = "/021.b13a348f.png";
},{}],"../images/022.png":[function(require,module,exports) {
module.exports = "/022.2c76a6b4.png";
},{}],"../images/023.png":[function(require,module,exports) {
module.exports = "/023.d8239825.png";
},{}],"../images/024.png":[function(require,module,exports) {
module.exports = "/024.8083562e.png";
},{}],"../images/025.png":[function(require,module,exports) {
module.exports = "/025.0b5c18aa.png";
},{}],"../images/026.png":[function(require,module,exports) {
module.exports = "/026.255a6005.png";
},{}],"../images/027.png":[function(require,module,exports) {
module.exports = "/027.0afe02cc.png";
},{}],"../images/028.png":[function(require,module,exports) {
module.exports = "/028.71cc3563.png";
},{}],"../images/029.png":[function(require,module,exports) {
module.exports = "/029.4d05a989.png";
},{}],"../images/030.png":[function(require,module,exports) {
module.exports = "/030.212eeb40.png";
},{}],"../images/031.png":[function(require,module,exports) {
module.exports = "/031.9a051aae.png";
},{}],"../images/032.png":[function(require,module,exports) {
module.exports = "/032.436d259c.png";
},{}],"../images/033.png":[function(require,module,exports) {
module.exports = "/033.3c4c1e41.png";
},{}],"../images/035.png":[function(require,module,exports) {
module.exports = "/035.d52d657a.png";
},{}],"../images/034.png":[function(require,module,exports) {
module.exports = "/034.009106ee.png";
},{}],"../images/036.png":[function(require,module,exports) {
module.exports = "/036.7a24bfa7.png";
},{}],"../images/037.png":[function(require,module,exports) {
module.exports = "/037.1f67377f.png";
},{}],"../images/038.png":[function(require,module,exports) {
module.exports = "/038.a03a4cfd.png";
},{}],"../images/039.png":[function(require,module,exports) {
module.exports = "/039.6c849b24.png";
},{}],"../images/040.png":[function(require,module,exports) {
module.exports = "/040.7fdc88f8.png";
},{}],"../images/041.png":[function(require,module,exports) {
module.exports = "/041.42ae4c49.png";
},{}],"../images/042.png":[function(require,module,exports) {
module.exports = "/042.fd633802.png";
},{}],"../images/043.png":[function(require,module,exports) {
module.exports = "/043.f50e0af4.png";
},{}],"../images/044.png":[function(require,module,exports) {
module.exports = "/044.f80bffb7.png";
},{}],"../images/045.png":[function(require,module,exports) {
module.exports = "/045.307bbb93.png";
},{}],"../images/046.png":[function(require,module,exports) {
module.exports = "/046.e02727a5.png";
},{}],"../images/047.png":[function(require,module,exports) {
module.exports = "/047.d1219f37.png";
},{}],"../images/048.png":[function(require,module,exports) {
module.exports = "/048.afca9b16.png";
},{}],"../images/049.png":[function(require,module,exports) {
module.exports = "/049.282b3c42.png";
},{}],"../images/050.png":[function(require,module,exports) {
module.exports = "/050.27839fd4.png";
},{}],"../images/051.png":[function(require,module,exports) {
module.exports = "/051.6ab9d774.png";
},{}],"../images/052.png":[function(require,module,exports) {
module.exports = "/052.0caf2755.png";
},{}],"../images/053.png":[function(require,module,exports) {
module.exports = "/053.1285df45.png";
},{}],"../images/054.png":[function(require,module,exports) {
module.exports = "/054.b5798f2d.png";
},{}],"../images/055.png":[function(require,module,exports) {
module.exports = "/055.14bff671.png";
},{}],"../images/056.png":[function(require,module,exports) {
module.exports = "/056.999c8bdf.png";
},{}],"../images/057.png":[function(require,module,exports) {
module.exports = "/057.8ebf7219.png";
},{}],"../images/058.png":[function(require,module,exports) {
module.exports = "/058.e1c9bdad.png";
},{}],"../images/059.png":[function(require,module,exports) {
module.exports = "/059.b16306ba.png";
},{}],"../images/060.png":[function(require,module,exports) {
module.exports = "/060.a0a479b3.png";
},{}],"../images/061.png":[function(require,module,exports) {
module.exports = "/061.79d65d16.png";
},{}],"../images/062.png":[function(require,module,exports) {
module.exports = "/062.4d26104a.png";
},{}],"../images/063.png":[function(require,module,exports) {
module.exports = "/063.003eafe0.png";
},{}],"../images/064.png":[function(require,module,exports) {
module.exports = "/064.a48db7d9.png";
},{}],"../images/065.png":[function(require,module,exports) {
module.exports = "/065.47351fec.png";
},{}],"../images/066.png":[function(require,module,exports) {
module.exports = "/066.dcd4a0bd.png";
},{}],"../images/067.png":[function(require,module,exports) {
module.exports = "/067.8f4ba63a.png";
},{}],"../images/068.png":[function(require,module,exports) {
module.exports = "/068.0f4def77.png";
},{}],"../images/069.png":[function(require,module,exports) {
module.exports = "/069.884f924b.png";
},{}],"../images/070.png":[function(require,module,exports) {
module.exports = "/070.75958e6e.png";
},{}],"../images/071.png":[function(require,module,exports) {
module.exports = "/071.85315c42.png";
},{}],"../images/072.png":[function(require,module,exports) {
module.exports = "/072.bf8bccc2.png";
},{}],"../images/073.png":[function(require,module,exports) {
module.exports = "/073.b2b0a9a8.png";
},{}],"../images/074.png":[function(require,module,exports) {
module.exports = "/074.41874dea.png";
},{}],"../images/075.png":[function(require,module,exports) {
module.exports = "/075.7dea168d.png";
},{}],"../images/076.png":[function(require,module,exports) {
module.exports = "/076.1b49c19e.png";
},{}],"../images/077.png":[function(require,module,exports) {
module.exports = "/077.b6e60456.png";
},{}],"../images/078.png":[function(require,module,exports) {
module.exports = "/078.9e0836fa.png";
},{}],"../images/079.png":[function(require,module,exports) {
module.exports = "/079.c9bfaf8c.png";
},{}],"../images/080.png":[function(require,module,exports) {
module.exports = "/080.12225043.png";
},{}],"../images/081.png":[function(require,module,exports) {
module.exports = "/081.3cbcbb7d.png";
},{}],"../images/082.png":[function(require,module,exports) {
module.exports = "/082.0e0b009b.png";
},{}],"../images/083.png":[function(require,module,exports) {
module.exports = "/083.61adc6df.png";
},{}],"../images/084.png":[function(require,module,exports) {
module.exports = "/084.0a57777a.png";
},{}],"../images/085.png":[function(require,module,exports) {
module.exports = "/085.6e4a8676.png";
},{}],"../images/086.png":[function(require,module,exports) {
module.exports = "/086.8f97d166.png";
},{}],"../images/087.png":[function(require,module,exports) {
module.exports = "/087.707326c4.png";
},{}],"../images/088.png":[function(require,module,exports) {
module.exports = "/088.6e38e68e.png";
},{}],"../images/089.png":[function(require,module,exports) {
module.exports = "/089.abd1d0f4.png";
},{}],"../images/090.png":[function(require,module,exports) {
module.exports = "/090.4d059a6c.png";
},{}],"../images/091.png":[function(require,module,exports) {
module.exports = "/091.68471f4d.png";
},{}],"../images/092.png":[function(require,module,exports) {
module.exports = "/092.d6c5b2f0.png";
},{}],"../images/093.png":[function(require,module,exports) {
module.exports = "/093.8529de26.png";
},{}],"../images/094.png":[function(require,module,exports) {
module.exports = "/094.3654496d.png";
},{}],"../images/095.png":[function(require,module,exports) {
module.exports = "/095.24b3b3d1.png";
},{}],"../images/096.png":[function(require,module,exports) {
module.exports = "/096.cb90299f.png";
},{}],"../images/097.png":[function(require,module,exports) {
module.exports = "/097.caee3088.png";
},{}],"../images/098.png":[function(require,module,exports) {
module.exports = "/098.be3a7075.png";
},{}],"../images/099.png":[function(require,module,exports) {
module.exports = "/099.c9d70b05.png";
},{}],"../images/100.png":[function(require,module,exports) {
module.exports = "/100.6c0f50da.png";
},{}],"../images/101.png":[function(require,module,exports) {
module.exports = "/101.ab203b63.png";
},{}],"../images/102.png":[function(require,module,exports) {
module.exports = "/102.2814f2d3.png";
},{}],"../images/103.png":[function(require,module,exports) {
module.exports = "/103.c405d5c8.png";
},{}],"../images/104.png":[function(require,module,exports) {
module.exports = "/104.64b37f47.png";
},{}],"../images/105.png":[function(require,module,exports) {
module.exports = "/105.d13a2cbc.png";
},{}],"../images/106.png":[function(require,module,exports) {
module.exports = "/106.025ca0dc.png";
},{}],"../images/107.png":[function(require,module,exports) {
module.exports = "/107.ced4a207.png";
},{}],"../images/108.png":[function(require,module,exports) {
module.exports = "/108.24018e12.png";
},{}],"../images/109.png":[function(require,module,exports) {
module.exports = "/109.92c7f707.png";
},{}],"../images/110.png":[function(require,module,exports) {
module.exports = "/110.8b507d13.png";
},{}],"../images/111.png":[function(require,module,exports) {
module.exports = "/111.f0d6842c.png";
},{}],"../images/112.png":[function(require,module,exports) {
module.exports = "/112.c1f02810.png";
},{}],"../images/113.png":[function(require,module,exports) {
module.exports = "/113.c81261ff.png";
},{}],"../images/114.png":[function(require,module,exports) {
module.exports = "/114.221ce032.png";
},{}],"../images/115.png":[function(require,module,exports) {
module.exports = "/115.bce3eddf.png";
},{}],"../images/116.png":[function(require,module,exports) {
module.exports = "/116.0f586822.png";
},{}],"../images/117.png":[function(require,module,exports) {
module.exports = "/117.aac43e70.png";
},{}],"../images/118.png":[function(require,module,exports) {
module.exports = "/118.77a67292.png";
},{}],"../images/119.png":[function(require,module,exports) {
module.exports = "/119.526ea0e7.png";
},{}],"../images/120.png":[function(require,module,exports) {
module.exports = "/120.20fb417c.png";
},{}],"../images/121.png":[function(require,module,exports) {
module.exports = "/121.ffc2a4f7.png";
},{}],"../images/122.png":[function(require,module,exports) {
module.exports = "/122.2621c0aa.png";
},{}],"../images/123.png":[function(require,module,exports) {
module.exports = "/123.78898911.png";
},{}],"../images/124.png":[function(require,module,exports) {
module.exports = "/124.831a64f3.png";
},{}],"../images/125.png":[function(require,module,exports) {
module.exports = "/125.429bb652.png";
},{}],"../images/126.png":[function(require,module,exports) {
module.exports = "/126.9459f2c6.png";
},{}],"../images/127.png":[function(require,module,exports) {
module.exports = "/127.6cc7e077.png";
},{}],"../images/128.png":[function(require,module,exports) {
module.exports = "/128.1f0ce3c1.png";
},{}],"../images/129.png":[function(require,module,exports) {
module.exports = "/129.b0e47603.png";
},{}],"../images/130.png":[function(require,module,exports) {
module.exports = "/130.cb4027fd.png";
},{}],"../images/131.png":[function(require,module,exports) {
module.exports = "/131.e8e9f6d9.png";
},{}],"../images/132.png":[function(require,module,exports) {
module.exports = "/132.0f15edb6.png";
},{}],"../images/133.png":[function(require,module,exports) {
module.exports = "/133.d4476f25.png";
},{}],"../images/134.png":[function(require,module,exports) {
module.exports = "/134.8e546c32.png";
},{}],"../images/135.png":[function(require,module,exports) {
module.exports = "/135.24907b30.png";
},{}],"../images/136.png":[function(require,module,exports) {
module.exports = "/136.d1ee07c9.png";
},{}],"../images/137.png":[function(require,module,exports) {
module.exports = "/137.04c05a93.png";
},{}],"../images/138.png":[function(require,module,exports) {
module.exports = "/138.6f2b1a48.png";
},{}],"../images/139.png":[function(require,module,exports) {
module.exports = "/139.a6177436.png";
},{}],"../images/140.png":[function(require,module,exports) {
module.exports = "/140.4f3cae35.png";
},{}],"../images/141.png":[function(require,module,exports) {
module.exports = "/141.063511ef.png";
},{}],"../images/142.png":[function(require,module,exports) {
module.exports = "/142.8f762c7a.png";
},{}],"../images/143.png":[function(require,module,exports) {
module.exports = "/143.df9f7964.png";
},{}],"../images/144.png":[function(require,module,exports) {
module.exports = "/144.f69e8845.png";
},{}],"../images/145.png":[function(require,module,exports) {
module.exports = "/145.8d1d621b.png";
},{}],"../images/146.png":[function(require,module,exports) {
module.exports = "/146.9afb65a5.png";
},{}],"../images/147.png":[function(require,module,exports) {
module.exports = "/147.6a91b946.png";
},{}],"../images/148.png":[function(require,module,exports) {
module.exports = "/148.2158a47c.png";
},{}],"../images/149.png":[function(require,module,exports) {
module.exports = "/149.059bb788.png";
},{}],"../images/150.png":[function(require,module,exports) {
module.exports = "/150.17753b4f.png";
},{}],"../images/151.png":[function(require,module,exports) {
module.exports = "/151.8df1eb48.png";
},{}],"../images/*.png":[function(require,module,exports) {
module.exports = {
  "100": require("./100.png"),
  "101": require("./101.png"),
  "102": require("./102.png"),
  "103": require("./103.png"),
  "104": require("./104.png"),
  "105": require("./105.png"),
  "106": require("./106.png"),
  "107": require("./107.png"),
  "108": require("./108.png"),
  "109": require("./109.png"),
  "110": require("./110.png"),
  "111": require("./111.png"),
  "112": require("./112.png"),
  "113": require("./113.png"),
  "114": require("./114.png"),
  "115": require("./115.png"),
  "116": require("./116.png"),
  "117": require("./117.png"),
  "118": require("./118.png"),
  "119": require("./119.png"),
  "120": require("./120.png"),
  "121": require("./121.png"),
  "122": require("./122.png"),
  "123": require("./123.png"),
  "124": require("./124.png"),
  "125": require("./125.png"),
  "126": require("./126.png"),
  "127": require("./127.png"),
  "128": require("./128.png"),
  "129": require("./129.png"),
  "130": require("./130.png"),
  "131": require("./131.png"),
  "132": require("./132.png"),
  "133": require("./133.png"),
  "134": require("./134.png"),
  "135": require("./135.png"),
  "136": require("./136.png"),
  "137": require("./137.png"),
  "138": require("./138.png"),
  "139": require("./139.png"),
  "140": require("./140.png"),
  "141": require("./141.png"),
  "142": require("./142.png"),
  "143": require("./143.png"),
  "144": require("./144.png"),
  "145": require("./145.png"),
  "146": require("./146.png"),
  "147": require("./147.png"),
  "148": require("./148.png"),
  "149": require("./149.png"),
  "150": require("./150.png"),
  "151": require("./151.png"),
  "001": require("./001.png"),
  "002": require("./002.png"),
  "004": require("./004.png"),
  "003": require("./003.png"),
  "005": require("./005.png"),
  "006": require("./006.png"),
  "007": require("./007.png"),
  "008": require("./008.png"),
  "009": require("./009.png"),
  "010": require("./010.png"),
  "011": require("./011.png"),
  "012": require("./012.png"),
  "013": require("./013.png"),
  "014": require("./014.png"),
  "015": require("./015.png"),
  "016": require("./016.png"),
  "017": require("./017.png"),
  "018": require("./018.png"),
  "019": require("./019.png"),
  "020": require("./020.png"),
  "021": require("./021.png"),
  "022": require("./022.png"),
  "023": require("./023.png"),
  "024": require("./024.png"),
  "025": require("./025.png"),
  "026": require("./026.png"),
  "027": require("./027.png"),
  "028": require("./028.png"),
  "029": require("./029.png"),
  "030": require("./030.png"),
  "031": require("./031.png"),
  "032": require("./032.png"),
  "033": require("./033.png"),
  "035": require("./035.png"),
  "034": require("./034.png"),
  "036": require("./036.png"),
  "037": require("./037.png"),
  "038": require("./038.png"),
  "039": require("./039.png"),
  "040": require("./040.png"),
  "041": require("./041.png"),
  "042": require("./042.png"),
  "043": require("./043.png"),
  "044": require("./044.png"),
  "045": require("./045.png"),
  "046": require("./046.png"),
  "047": require("./047.png"),
  "048": require("./048.png"),
  "049": require("./049.png"),
  "050": require("./050.png"),
  "051": require("./051.png"),
  "052": require("./052.png"),
  "053": require("./053.png"),
  "054": require("./054.png"),
  "055": require("./055.png"),
  "056": require("./056.png"),
  "057": require("./057.png"),
  "058": require("./058.png"),
  "059": require("./059.png"),
  "060": require("./060.png"),
  "061": require("./061.png"),
  "062": require("./062.png"),
  "063": require("./063.png"),
  "064": require("./064.png"),
  "065": require("./065.png"),
  "066": require("./066.png"),
  "067": require("./067.png"),
  "068": require("./068.png"),
  "069": require("./069.png"),
  "070": require("./070.png"),
  "071": require("./071.png"),
  "072": require("./072.png"),
  "073": require("./073.png"),
  "074": require("./074.png"),
  "075": require("./075.png"),
  "076": require("./076.png"),
  "077": require("./077.png"),
  "078": require("./078.png"),
  "079": require("./079.png"),
  "080": require("./080.png"),
  "081": require("./081.png"),
  "082": require("./082.png"),
  "083": require("./083.png"),
  "084": require("./084.png"),
  "085": require("./085.png"),
  "086": require("./086.png"),
  "087": require("./087.png"),
  "088": require("./088.png"),
  "089": require("./089.png"),
  "090": require("./090.png"),
  "091": require("./091.png"),
  "092": require("./092.png"),
  "093": require("./093.png"),
  "094": require("./094.png"),
  "095": require("./095.png"),
  "096": require("./096.png"),
  "097": require("./097.png"),
  "098": require("./098.png"),
  "099": require("./099.png")
};
},{"./001.png":"../images/001.png","./002.png":"../images/002.png","./004.png":"../images/004.png","./003.png":"../images/003.png","./005.png":"../images/005.png","./006.png":"../images/006.png","./007.png":"../images/007.png","./008.png":"../images/008.png","./009.png":"../images/009.png","./010.png":"../images/010.png","./011.png":"../images/011.png","./012.png":"../images/012.png","./013.png":"../images/013.png","./014.png":"../images/014.png","./015.png":"../images/015.png","./016.png":"../images/016.png","./017.png":"../images/017.png","./018.png":"../images/018.png","./019.png":"../images/019.png","./020.png":"../images/020.png","./021.png":"../images/021.png","./022.png":"../images/022.png","./023.png":"../images/023.png","./024.png":"../images/024.png","./025.png":"../images/025.png","./026.png":"../images/026.png","./027.png":"../images/027.png","./028.png":"../images/028.png","./029.png":"../images/029.png","./030.png":"../images/030.png","./031.png":"../images/031.png","./032.png":"../images/032.png","./033.png":"../images/033.png","./035.png":"../images/035.png","./034.png":"../images/034.png","./036.png":"../images/036.png","./037.png":"../images/037.png","./038.png":"../images/038.png","./039.png":"../images/039.png","./040.png":"../images/040.png","./041.png":"../images/041.png","./042.png":"../images/042.png","./043.png":"../images/043.png","./044.png":"../images/044.png","./045.png":"../images/045.png","./046.png":"../images/046.png","./047.png":"../images/047.png","./048.png":"../images/048.png","./049.png":"../images/049.png","./050.png":"../images/050.png","./051.png":"../images/051.png","./052.png":"../images/052.png","./053.png":"../images/053.png","./054.png":"../images/054.png","./055.png":"../images/055.png","./056.png":"../images/056.png","./057.png":"../images/057.png","./058.png":"../images/058.png","./059.png":"../images/059.png","./060.png":"../images/060.png","./061.png":"../images/061.png","./062.png":"../images/062.png","./063.png":"../images/063.png","./064.png":"../images/064.png","./065.png":"../images/065.png","./066.png":"../images/066.png","./067.png":"../images/067.png","./068.png":"../images/068.png","./069.png":"../images/069.png","./070.png":"../images/070.png","./071.png":"../images/071.png","./072.png":"../images/072.png","./073.png":"../images/073.png","./074.png":"../images/074.png","./075.png":"../images/075.png","./076.png":"../images/076.png","./077.png":"../images/077.png","./078.png":"../images/078.png","./079.png":"../images/079.png","./080.png":"../images/080.png","./081.png":"../images/081.png","./082.png":"../images/082.png","./083.png":"../images/083.png","./084.png":"../images/084.png","./085.png":"../images/085.png","./086.png":"../images/086.png","./087.png":"../images/087.png","./088.png":"../images/088.png","./089.png":"../images/089.png","./090.png":"../images/090.png","./091.png":"../images/091.png","./092.png":"../images/092.png","./093.png":"../images/093.png","./094.png":"../images/094.png","./095.png":"../images/095.png","./096.png":"../images/096.png","./097.png":"../images/097.png","./098.png":"../images/098.png","./099.png":"../images/099.png","./100.png":"../images/100.png","./101.png":"../images/101.png","./102.png":"../images/102.png","./103.png":"../images/103.png","./104.png":"../images/104.png","./105.png":"../images/105.png","./106.png":"../images/106.png","./107.png":"../images/107.png","./108.png":"../images/108.png","./109.png":"../images/109.png","./110.png":"../images/110.png","./111.png":"../images/111.png","./112.png":"../images/112.png","./113.png":"../images/113.png","./114.png":"../images/114.png","./115.png":"../images/115.png","./116.png":"../images/116.png","./117.png":"../images/117.png","./118.png":"../images/118.png","./119.png":"../images/119.png","./120.png":"../images/120.png","./121.png":"../images/121.png","./122.png":"../images/122.png","./123.png":"../images/123.png","./124.png":"../images/124.png","./125.png":"../images/125.png","./126.png":"../images/126.png","./127.png":"../images/127.png","./128.png":"../images/128.png","./129.png":"../images/129.png","./130.png":"../images/130.png","./131.png":"../images/131.png","./132.png":"../images/132.png","./133.png":"../images/133.png","./134.png":"../images/134.png","./135.png":"../images/135.png","./136.png":"../images/136.png","./137.png":"../images/137.png","./138.png":"../images/138.png","./139.png":"../images/139.png","./140.png":"../images/140.png","./141.png":"../images/141.png","./142.png":"../images/142.png","./143.png":"../images/143.png","./144.png":"../images/144.png","./145.png":"../images/145.png","./146.png":"../images/146.png","./147.png":"../images/147.png","./148.png":"../images/148.png","./149.png":"../images/149.png","./150.png":"../images/150.png","./151.png":"../images/151.png"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../../images/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log(JSON.parse(xmlHttp.responseText).damage_relations.double_damage_to[1].name);
function formatName(pokemon) {
  if (pokemon.toString().length == 1) {
    var pokePhoto = '00'.concat(pokemon);
    return pokePhoto;
  }

  if (pokemon.toString().length == 2) {
    var _pokePhoto = '0'.concat(pokemon);

    return _pokePhoto;
  } else return pokemon;
}

function generatePokemon() {
  return ~~(Math.random() * 151 + 1);
}

function getInfo(pokemon) {
  var xmlHttp = new XMLHttpRequest();
  var url = "https://pokeapi.co/api/v2/pokemon/".concat(pokemon, "/");
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function getStadistics(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function win(infopoke) {
  console.log("Gana: ", infopoke.forms[0].name);
  throw new Error("fin");
}

function zeroDamage(sPokemon1, pokemon1, pokemon2) {
  sPokemon1.damage_relations.no_damage_to.forEach(function (element) {
    for (var i = 0; i < pokemon2.types.length; i++) {
      if (element.name == pokemon2.types[i].type.name) {
        console.log("zero damage from ".concat(pokemon1.forms[0].name, "  to ").concat(pokemon2.forms[0].name));
        win(pokemon2);
      }
    }
  });
}

function doubleDamage(sPokemon1, pokemon1, pokemon2) {
  sPokemon1.damage_relations.double_damage_to.forEach(function (element) {
    console.log(pokemon2.types.length);

    for (var i = 0; i < pokemon2.types.length; i++) {
      console.log(pokemon2.types[i].type.name);

      if (element.name == pokemon2.types[i].type.name) {
        console.log("double damage from ".concat(pokemon1.forms[0].name, "  to ").concat(pokemon2.forms[0].name));
        win(pokemon1);
      }
    }
  });
}

function halfDamage(sPokemon1, pokemon1, pokemon2) {
  sPokemon1.damage_relations.half_damage_to.forEach(function (element) {
    for (var i = 0; i < pokemon2.types.length; i++) {
      if (element.name == pokemon2.types[i].type.name) {
        console.log("half damage from ".concat(pokemon1.forms[0].name, " to ").concat(pokemon2.forms[0].name));
        win(pokemon2);
      }
    }
  });
}

var pokemon1 = generatePokemon();
var pokemon2 = generatePokemon();
var infopoke1 = getInfo(pokemon1);
var infopoke2 = getInfo(pokemon2);
var pokePhoto1 = formatName(pokemon1);
var pokePhoto2 = formatName(pokemon2);
var board = document.querySelector('.board');
var foto1 = document.createElement('img');
var foto2 = document.createElement('img');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
div1.classList.add('card');
div2.classList.add('card');
var h1 = document.createElement('h1');
h1.textContent = infopoke1.forms[0].name;
var h2 = document.createElement('h1');
h2.textContent = infopoke2.forms[0].name;
foto1.src = "".concat(_.default[pokePhoto1]);
div1.appendChild(h1);
div1.appendChild(foto1);
foto2.src = "".concat(_.default[pokePhoto2]);
div2.appendChild(h2);
div2.appendChild(foto2);
board.appendChild(div1);
board.appendChild(div2);
/***********************************************/

var url = infopoke1.types[0].type.url;
var url2 = infopoke2.types[0].type.url;
var stadisticsPoke1 = getStadistics(url);
var stadisticsPoke2 = getStadistics(url2);
console.log(stadisticsPoke1.damage_relations.double_damage_to);
console.log(stadisticsPoke2.damage_relations.double_damage_to);
zeroDamage(stadisticsPoke1, infopoke1, infopoke2);
zeroDamage(stadisticsPoke2, infopoke2, infopoke1);
doubleDamage(stadisticsPoke1, infopoke1, infopoke2);
doubleDamage(stadisticsPoke2, infopoke2, infopoke1);
halfDamage(stadisticsPoke1, infopoke1, infopoke2);
halfDamage(stadisticsPoke2, infopoke2, infopoke1);
var winner = Math.round(Math.random());
/*if(winner)
    win(infopoke2);
else
    win(infopoke1);
console.log(winner);*/
},{"../../images/*.png":"../images/*.png"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46053" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map