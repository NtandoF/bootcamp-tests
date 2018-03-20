describe('isFromBellville' , function(){
    it('should return true if regNum from Bellville' , function(){
  assert.equal(isFromBellville('CY325'), true);
});

  it('should return false if regNum from Bellville' , function(){
assert.equal(isFromBellville('CA854'), false);
});
});

  
