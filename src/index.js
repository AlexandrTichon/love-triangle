/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var TreangleNumber = 0;                      //numbers of triangles
  var TriangleMass = [preferences.length];      //array of element usage
  for (let i = 0; i < TriangleMass.length; i++)
  {
      TriangleMass[i] = true;         //all elements can used
  }
  for ( i = 0; i < preferences.length ; i++)
  {                                                                     //check all parametrs
    if (preferences[preferences[preferences[i] - 1] - 1] === (i+1) && TriangleMassCheck(i, TriangleMass) && CheckMoving(preferences, i))
    {
        TriangleMass[i] = TriangleMass[[preferences[i] - 1]] = TriangleMass[preferences[preferences[i] - 1] - 1] = false; //register used elements
        TreangleNumber++;
    }
  }
  return TreangleNumber;


  function CheckMoving(CheckingArray = [], index)   //people can't love himself (it's a joke)
  {
      if (CheckingArray[index] == CheckingArray[CheckingArray[index] - 1])return false;
      else return true;
  }


  function TriangleMassCheck(index, CheckingMass = []) //check elements for using
  {
      if (CheckingMass[index] == false)return false;          //return false if if use and true if not
      else return true;
  }
};
