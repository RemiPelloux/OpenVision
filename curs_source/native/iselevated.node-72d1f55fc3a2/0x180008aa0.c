
/* Address: 0x180008aa0; Evidence: ev_def024a0b502b3e346aeabe2e61538c40cb993eee3fa6f0f64ae16b2b659fb59 */

bool FUN_180008aa0(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18001d018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18001d018 == 0;
    if (!bVar2) goto LAB_180008ada;
    pFVar1 = FUN_180008688(3,"FlsGetValue2",(uint *)&DAT_180011590,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_180008ada:
  return !bVar2;
}

