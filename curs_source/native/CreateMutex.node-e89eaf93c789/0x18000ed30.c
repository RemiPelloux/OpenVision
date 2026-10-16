
/* Address: 0x18000ed30; Evidence: ev_af7917efff118db3d78dfe526e9612fd90fc42b430c28f1036bd59fa095ef2b0 */

bool FUN_18000ed30(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_180027018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_180027018 == 0;
    if (!bVar2) goto LAB_18000ed6a;
    pFVar1 = FUN_18000e918(3,"FlsGetValue2",(uint *)&DAT_180018720,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18000ed6a:
  return !bVar2;
}

