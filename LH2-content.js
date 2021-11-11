var html = document.querySelector('html');
var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
var node;

while (node = walker.nextNode()) {



if ( node.nodeValue.includes("pthalate") ) {
    newNodeValue = node.nodeValue.replace(/pthalate/gi,"<span style='background-color: red;color: yellow;'>☠️pthalate☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("plastic") ) {
    newNodeValue = node.nodeValue.replace(/plastic/gi,"<span style='background-color: red;color: yellow;'>☠️plastic☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("bpa") ) {
    newNodeValue = node.nodeValue.replace(/bpa/gi,"<span style='background-color: red;color: yellow;'>☠️bpa☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("polystyrene") ) {
    newNodeValue = node.nodeValue.replace(/polystyrene/gi,"<span style='background-color: red;color: yellow;'>☠️polystyrene☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("pvc") ) {
    newNodeValue = node.nodeValue.replace(/pvc/gi,"<span style='background-color: red;color: yellow;'>☠️pvc☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("VOC") ) {
    newNodeValue = node.nodeValue.replace(/VOC/g,"<span style='background-color: red;color: yellow;'>☠️VOC☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("hfr") ) {
    newNodeValue = node.nodeValue.replace(/hfr/gi,"<span style='background-color: red;color: yellow;'>☠️hfr☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("pfc") ) {
    newNodeValue = node.nodeValue.replace(/pfc/gi,"<span style='background-color: red;color: yellow;'>☠️pfc☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("water repel") ) {
    newNodeValue = node.nodeValue.replace(/water repel/gi,"<span style='background-color: red;color: yellow;'>☠️water repel☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("stain repel") ) {
    newNodeValue = node.nodeValue.replace(/stain repel/gi,"<span style='background-color: red;color: yellow;'>☠️stain repel☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("perfluor") ) {
    newNodeValue = node.nodeValue.replace(/perfluor/gi,"<span style='background-color: red;color: yellow;'>☠️perfluor☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("polyfluor") ) {
    newNodeValue = node.nodeValue.replace(/polyfluor/gi,"<span style='background-color: red;color: yellow;'>☠️polyfluor☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("teflon") ) {
    newNodeValue = node.nodeValue.replace(/teflon/gi,"<span style='background-color: red;color: yellow;'>☠️teflon☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("antibacteria") ) {
    newNodeValue = node.nodeValue.replace(/antibacteria/gi,"<span style='background-color: red;color: yellow;'>☠️antibacteria☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("antimicrob") ) {
    newNodeValue = node.nodeValue.replace(/antimicrob/gi,"<span style='background-color: red;color: yellow;'>☠️antimicrob☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("anti-odor") ) {
    newNodeValue = node.nodeValue.replace(/anti-odor/gi,"<span style='background-color: red;color: yellow;'>☠️anti-odor☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("triclosan") ) {
    newNodeValue = node.nodeValue.replace(/triclosan/gi,"<span style='background-color: red;color: yellow;'>☠️triclosan☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("triclocarbon") ) {
    newNodeValue = node.nodeValue.replace(/triclocarbon/gi,"<span style='background-color: red;color: yellow;'>☠️triclocarbon☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("benzalkonium chloride") ) {
    newNodeValue = node.nodeValue.replace(/benzalkonium chloride/gi,"<span style='background-color: red;color: yellow;'>☠️benzalkonium chloride☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("bisphenols") ) {
    newNodeValue = node.nodeValue.replace(/bisphenols/gi,"<span style='background-color: red;color: yellow;'>☠️bisphenols☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("flame retardant") ) {
    newNodeValue = node.nodeValue.replace(/flame retardant/gi,"<span style='background-color: red;color: yellow;'>☠️flame retardant☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("paraben") ) {
    newNodeValue = node.nodeValue.replace(/paraben/gi,"<span style='background-color: red;color: yellow;'>☠️paraben☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("butyl cellosolve") ) {
    newNodeValue = node.nodeValue.replace(/butyl cellosolve/gi,"<span style='background-color: red;color: yellow;'>☠️butyl cellosolve☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("phenol") ) {
    newNodeValue = node.nodeValue.replace(/phenol/gi,"<span style='background-color: red;color: yellow;'>☠️phenol☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("cresol") ) {
    newNodeValue = node.nodeValue.replace(/cresol/gi,"<span style='background-color: red;color: yellow;'>☠️cresol☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("formaldehyde") ) {
    newNodeValue = node.nodeValue.replace(/formaldehyde/gi,"<span style='background-color: red;color: yellow;'>☠️formaldehyde☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("glycol") ) {
    newNodeValue = node.nodeValue.replace(/glycol/gi,"<span style='background-color: red;color: yellow;'>☠️glycol☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("c9-11 pareth-8") ) {
    newNodeValue = node.nodeValue.replace(/c9-11 pareth-8/gi,"<span style='background-color: red;color: yellow;'>☠️c9-11 pareth-8☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("sodium hypochlorite") ) {
    newNodeValue = node.nodeValue.replace(/sodium hypochlorite/gi,"<span style='background-color: red;color: yellow;'>☠️sodium hypochlorite☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("petroleum") ) {
    newNodeValue = node.nodeValue.replace(/petroleum/gi,"<span style='background-color: red;color: yellow;'>☠️petroleum☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("ammonia") ) {
    newNodeValue = node.nodeValue.replace(/ammonia/gi,"<span style='background-color: red;color: yellow;'>☠️ammonia☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("sodium borate") ) {
    newNodeValue = node.nodeValue.replace(/sodium borate/gi,"<span style='background-color: red;color: yellow;'>☠️sodium borate☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("fragrance") ) {
    newNodeValue = node.nodeValue.replace(/fragrance/gi,"<span style='background-color: red;color: yellow;'>☠️fragrance☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("propellant") ) {
    newNodeValue = node.nodeValue.replace(/propellant/gi,"<span style='background-color: red;color: yellow;'>☠️propellant☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("talc") ) {
    newNodeValue = node.nodeValue.replace(/talc/gi,"<span style='background-color: red;color: yellow;'>☠️talc☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("butane") ) {
    newNodeValue = node.nodeValue.replace(/butane/gi,"<span style='background-color: red;color: yellow;'>☠️butane☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("propane") ) {
    newNodeValue = node.nodeValue.replace(/propane/gi,"<span style='background-color: red;color: yellow;'>☠️propane☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("parfum") ) {
    newNodeValue = node.nodeValue.replace(/parfum/gi,"<span style='background-color: red;color: yellow;'>☠️parfum☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("butylphenyl methylpropional") ) {
    newNodeValue = node.nodeValue.replace(/butylphenyl methylpropional/gi,"<span style='background-color: red;color: yellow;'>☠️butylphenyl methylpropional☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("polyparaben") ) {
    newNodeValue = node.nodeValue.replace(/polyparaben/gi,"<span style='background-color: red;color: yellow;'>☠️polyparaben☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("retinyl palmitate") ) {
    newNodeValue = node.nodeValue.replace(/retinyl palmitate/gi,"<span style='background-color: red;color: yellow;'>☠️retinyl palmitate☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("benzophenon-3") ) {
    newNodeValue = node.nodeValue.replace(/benzophenon-3/gi,"<span style='background-color: red;color: yellow;'>☠️benzophenon-3☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("propylparaben") ) {
    newNodeValue = node.nodeValue.replace(/propylparaben/gi,"<span style='background-color: red;color: yellow;'>☠️propylparaben☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("butylparaben") ) {
    newNodeValue = node.nodeValue.replace(/butylparaben/gi,"<span style='background-color: red;color: yellow;'>☠️butylparaben☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("retinol") ) {
    newNodeValue = node.nodeValue.replace(/retinol/gi,"<span style='background-color: red;color: yellow;'>☠️retinol☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("hydroquinone") ) {
    newNodeValue = node.nodeValue.replace(/hydroquinone/gi,"<span style='background-color: red;color: yellow;'>☠️hydroquinone☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("sulfate") ) {
    newNodeValue = node.nodeValue.replace(/sulfate/gi,"<span style='background-color: red;color: yellow;'>☠️sulfate☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("xynol") ) {
    newNodeValue = node.nodeValue.replace(/xynol/gi,"<span style='background-color: red;color: yellow;'>☠️xynol☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("ceteareth") ) {
    newNodeValue = node.nodeValue.replace(/ceteareth/gi,"<span style='background-color: red;color: yellow;'>☠️ceteareth☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("oleth") ) {
    newNodeValue = node.nodeValue.replace(/oleth/gi,"<span style='background-color: red;color: yellow;'>☠️oleth☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("bp") ) {
    newNodeValue = node.nodeValue.replace(/bp/gi,"<span style='background-color: red;color: yellow;'>☠️bp☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("benzone") ) {
    newNodeValue = node.nodeValue.replace(/benzone/gi,"<span style='background-color: red;color: yellow;'>☠️benzone☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("bha") ) {
    newNodeValue = node.nodeValue.replace(/bha/gi,"<span style='background-color: red;color: yellow;'>☠️bha☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("bht") ) {
    newNodeValue = node.nodeValue.replace(/bht/gi,"<span style='background-color: red;color: yellow;'>☠️bht☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("coal tar") ) {
    newNodeValue = node.nodeValue.replace(/coal tar/gi,"<span style='background-color: red;color: yellow;'>☠️coal tar☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("thanolamine") ) {
    newNodeValue = node.nodeValue.replace(/triethanolamine/gi,"<span style='background-color: red;color: yellow;'>☠️triethanolamine☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("arsenic") ) {
    newNodeValue = node.nodeValue.replace(/arsenic/gi,"<span style='background-color: red;color: yellow;'>☠️arsenic☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("paba") ) {
    newNodeValue = node.nodeValue.replace(/paba/gi,"<span style='background-color: red;color: yellow;'>☠️paba☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("phenoxyethanol") ) {
    newNodeValue = node.nodeValue.replace(/phenoxyethanol/gi,"<span style='background-color: red;color: yellow;'>☠️phenoxyethanol☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("mercury") ) {
    newNodeValue = node.nodeValue.replace(/mercury/gi,"<span style='background-color: red;color: yellow;'>☠️mercury☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("aluminium") ) {
    newNodeValue = node.nodeValue.replace(/aluminium/gi,"<span style='background-color: red;color: yellow;'>☠️aluminium☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("omc") ) {
    newNodeValue = node.nodeValue.replace(/omc/gi,"<span style='background-color: red;color: yellow;'>☠️omc☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("parsol") ) {
    newNodeValue = node.nodeValue.replace(/parsol/gi,"<span style='background-color: red;color: yellow;'>☠️parsol☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("MEA") ) {
    newNodeValue = node.nodeValue.replace(/MEA/g,"<span style='background-color: red;color: yellow;'>☠️MEA☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("silicone") ) {
    newNodeValue = node.nodeValue.replace(/silicone/gi,"<span style='background-color: red;color: yellow;'>☠️silicone☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("polyester") ) {
    newNodeValue = node.nodeValue.replace(/polyester/gi,"<span style='background-color: red;color: yellow;'>☠️polyester☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("nylon") ) {
    newNodeValue = node.nodeValue.replace(/nylon/gi,"<span style='background-color: red;color: yellow;'>☠️nylon☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

if ( node.nodeValue.includes("acrylic") ) {
    newNodeValue = node.nodeValue.replace(/acrylic/gi,"<span style='background-color: red;color: yellow;'>☠️acrylic☠️</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
}

}
