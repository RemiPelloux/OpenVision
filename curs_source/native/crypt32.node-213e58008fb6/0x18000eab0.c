
/* Address: 0x18000eab0; Evidence: ev_e6e794ae60554af850c1be8c7040c63cf656f93ee8438bdd5aea6d90adeb0d99 */

bool FUN_18000eab0(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_180026018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_180026018 == 0;
    if (!bVar2) goto LAB_18000eaea;
    pFVar1 = FUN_18000e698(3,"FlsGetValue2",(uint *)&DAT_180017730,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18000eaea:
  return !bVar2;
}

