
/* Address: 0x180008bc0; Evidence: ev_92405819bafcab337b23e81b0a78214bce46aa1993b77aaf3d130b9bc48b22ae */

bool FUN_180008bc0(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18001e018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18001e018 == 0;
    if (!bVar2) goto LAB_180008bfa;
    pFVar1 = FUN_1800087a8(3,"FlsGetValue2",(uint *)&DAT_180011580,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_180008bfa:
  return !bVar2;
}

