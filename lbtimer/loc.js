(() => {
    let a;
    try {
        a = buds.budsMap_.budsData_.map.location.politicalEntity.name
    } catch (t) {
        try {
            a = JSON.parse(data.itemParameters).location
        } catch (a) {}
    }
    a && window.postMessage({
        from: "LBT",
        loc: a
    }, "*")
})();