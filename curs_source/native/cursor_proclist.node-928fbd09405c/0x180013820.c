
/* Address: 0x180013820; Evidence: ev_99794639f6aad7ddb8a32799bf20fd36a9c8323ca0eb0a520c4a20b4e4170a7d */

bool FUN_180013820(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18002c018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18002c018 == 0;
    if (!bVar2) goto LAB_18001385a;
    pFVar1 = FUN_180013408(3,"FlsGetValue2",(uint *)&DAT_18001d5f0,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18001385a:
  return !bVar2;
}

