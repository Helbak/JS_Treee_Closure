

describe(" test binarySearch", () => {
    before(() => {

    });
    it(`test binarySearch`, function () {
        let array = [0,1,2,3,4,5];
        const act = binarySearch(array,2);
        const exp = 2;
        assert.deepEqual(act, exp);
    });
    it(`test binarySearch`, function () {
        let array = [1,2,3,4,5,6];
        const act = binarySearch(array,5);
        const exp = 5;
        assert.deepEqual(act, exp);
    });
    it(`test binarySearch`, function () {
        let array = [1,2,3,4,5,6,7,8,9,10,11];
        const act = binarySearch(array,5);
        const exp = 5;
        assert.deepEqual(act, exp);
    });
    it(`test clouserFeebo`, function () {
        const act = getClouserFeebo(1,1000);
        const exp = 987;
        assert.deepEqual(act, exp);
    });
    it(`test getFeeboByIndex`, function () {
        const act = getFeeboByIndex(4);
        const exp = 3;
        assert.deepEqual(act, exp);
    });
    it(`test getFeeboByIndex via getFeebonachi`, function () {
        const act = getFeebonachi(6, );
        const exp = 8;
        assert.deepEqual(act, exp);
    });
    it(`test clouserFeebo via getFeebonachi `, function () {
        const act = getFeebonachi( 10);
        const exp = 55;
        assert.deepEqual(act, exp);
    });
});
describe(" test getFactorial", () => {
    before(() => {

    });
    it(`test getFactorial 5`, function () {
                const act = getFactorial(5);
        const exp = 120;
        assert.deepEqual(act, exp);
    });

it(`test getFactorial 0`, function () {
    const act = getFactorial(0);
    const exp = 1;
    assert.deepEqual(act, exp);
});

});






