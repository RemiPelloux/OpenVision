
/* Address: 0x18000c460; Evidence: ev_a35a73f852d3048d37c6612b7da8879c5d3d61bd9dce25de4125d32b1b647d67 */

bool FUN_18000c460(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18002c018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18002c018 == 0;
    if (!bVar2) goto LAB_18000c49a;
    pFVar1 = FUN_18000c048(3,"FlsGetValue2",(uint *)&DAT_18001b7e0,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18000c49a:
  return !bVar2;
}

