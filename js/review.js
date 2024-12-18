const stateImages = {
    al: { name: "Alabama", image:'img/alabama.jpg'},
    ak: 'images/alaska.jpg',
    az: 'images/arizona.jpg',
    ar: 'images/arkansas.jpg',
    ca: 'images/california.jpg',
    co: 'images/colorado.jpg',
    ct: 'images/connecticut.jpg',
    de: 'images/delaware.jpg',
    dc: 'images/district-of-columbia.jpg',
    fl: 'images/florida.jpg',
    ga: 'images/georgia.jpg',
    hi: 'images/hawaii.jpg',
    id: 'images/idaho.jpg',
    il: 'images/illinois.jpg',
    in: 'images/indiana.jpg',
    ia: 'images/iowa.jpg',
    ks: 'images/kansas.jpg',
    ky: 'images/kentucky.jpg',
    la: 'images/louisiana.jpg',
    me: 'images/maine.jpg',
    md: 'images/maryland.jpg',
    ma: 'images/massachusetts.jpg',
    mi: 'images/michigan.jpg',
    mn: 'images/minnesota.jpg',
    ms: 'images/mississippi.jpg',
    mo: 'images/missouri.jpg',
    mt: 'images/montana.jpg',
    ne: 'images/nebraska.jpg',
    nv: 'images/nevada.jpg',
    nh: 'images/new-hampshire.jpg',
    nj: 'images/new-jersey.jpg',
    nm: 'images/new-mexico.jpg',
    ny: 'images/new-york.jpg',
    nc: 'images/north-carolina.jpg',
    nd: 'images/north-dakota.jpg',
    oh: 'images/ohio.jpg',
    ok: 'images/oklahoma.jpg',
    or: 'images/oregon.jpg',
    pa: 'images/pennsylvania.jpg',
    ri: 'images/rhode-island.jpg',
    sc: 'images/south-carolina.jpg',
    sd: 'images/south-dakota.jpg',
    tn: 'images/tennessee.jpg',
    tx: 'images/texas.jpg',
    ut: 'images/utah.jpg',
    vt: 'images/vermont.jpg',
    va: 'images/virginia.jpg',
    wa: 'images/washington.jpg',
    wv: 'images/west-virginia.jpg',
    wi: 'images/wisconsin.jpg',
    wy: 'images/wyoming.jpg',
};
//update the post card based on the state selected
stateSelect.addEventListener('change', () => {
    const stateCode = stateSelect.value;
    if (stateCode !== 'empty-state') {
        greeting.textContent = 'Welcome to';
        stateHeading.textContent = stateSelect.options[stateSelect.selectedIndex].text;
        stateImage.src = stateImages[stateCode] || '';
        stateImage.style.display = 'block';
    } else {
        greeting.textContent = 'To Generate a Postcard';
        stateHeading.textContent = 'Choose a state';
        stateImage.style.display = 'none';
    }
});
