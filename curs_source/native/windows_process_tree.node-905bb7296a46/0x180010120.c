
/* Address: 0x180010120; Evidence: ev_c6c6cbfdd1a9f28ed77fce2f6d2255e6a36a78cbf12fdbeca9f190944cbba0a6 */

bool FUN_180010120(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_180028018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_180028018 == 0;
    if (!bVar2) goto LAB_18001015a;
    pFVar1 = FUN_18000fd08(3,"FlsGetValue2",(uint *)&DAT_180019750,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18001015a:
  return !bVar2;
}

