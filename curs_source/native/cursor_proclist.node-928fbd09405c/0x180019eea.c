
/* Address: 0x180019eea; Evidence: ev_74556ca50e1c28b573d7fc05b2951863d1039ccc1f06408c3f2886a03d6c8a6c */

void FUN_180019eea(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_18000babc();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

