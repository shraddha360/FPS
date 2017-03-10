var EnemyHealth : int = 10;
function DeductPoints( damageAmount : int){
 EnemyHealth -= damageAmount;

}

 function Update(){
  if( EnemyHealth <= 0){
   Destroy(gameObject);

  }
 }
