figma.showUI(__html__);
figma.ui.resize(172, 180);
//var testdata = '123';
//localStorage.setItem("object", testdata);
figma.ui.onmessage = msg => {
    let special_symbols = "   ⟶  ";
    figma.currentPage.selection.forEach(node => {
        if (node.type == 'FRAME') {
            if (msg.type === 'change-status') {
                if (node.name.indexOf(special_symbols) != -1) {
                    node.name = node.name.split(special_symbols)[1];
                }
                node.name = msg.buttonName + special_symbols + node.name;
            }
            else {
                node.name = node.name.split(special_symbols)[1];
                // localStorage.getItem("object");
            }
            node.setRelaunchData({ relaunch: '' });
        }
    });
};
