
/* Address: 0x18000e63c; Evidence: ev_7c6ec4fb7df07220ce5bb57e3f6e09057b845f39320b9f8102f9bbdc1b4939b3 */

ulonglong FUN_18000e63c(FILE *param_1)

{
  byte bVar1;
  uint uVar2;
  FILE *pFVar3;
  undefined7 extraout_var;
  ulonglong uVar4;
  
  pFVar3 = (FILE *)FUN_1800083b0(2);
  if (param_1 == pFVar3) {
    uVar4 = CONCAT71((int7)((ulonglong)pFVar3 >> 8),1);
  }
  else {
    pFVar3 = (FILE *)FUN_1800083b0(1);
    if (param_1 == pFVar3) {
      uVar2 = _fileno(param_1);
      bVar1 = FUN_1800141a0(uVar2);
      uVar4 = CONCAT71(extraout_var,(int)CONCAT71(extraout_var,bVar1) != 0);
    }
    else {
      uVar4 = (ulonglong)pFVar3 & 0xffffffffffffff00;
    }
  }
  return uVar4;
}

