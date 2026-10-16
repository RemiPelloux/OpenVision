
/* Address: 0x180009d20; Evidence: ev_681b03e60a10ab652ca432b0a6b26eab23610bd498aa6ec9e051472a9c5c9908 */

bool FUN_180009d20(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_180020018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_180020018 == 0;
    if (!bVar2) goto LAB_180009d5a;
    pFVar1 = FUN_180009908(3,"FlsGetValue2",(uint *)&DAT_180012620,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_180009d5a:
  return !bVar2;
}

