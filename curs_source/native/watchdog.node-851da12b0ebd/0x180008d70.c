
/* Address: 0x180008d70; Evidence: ev_7708f6b9740a8b1625345a45e10d6a6c74dce990ee3f3bcb654c3d1d3d522231 */

bool FUN_180008d70(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18001e018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18001e018 == 0;
    if (!bVar2) goto LAB_180008daa;
    pFVar1 = FUN_180008958(3,"FlsGetValue2",(uint *)&DAT_1800115b0,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_180008daa:
  return !bVar2;
}

