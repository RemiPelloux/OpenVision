
/* Address: 0x180001000; Evidence: ev_babf80ad8fe77679900275f77b1cd52c7649fd584e0cb25a885c9856ace9c007 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180001000(void)

{
  DAT_180029de8 = operator_new(0x40);
  *(void **)DAT_180029de8 = DAT_180029de8;
  *(void **)((longlong)DAT_180029de8 + 8) = DAT_180029de8;
  DAT_180029df8 = 0;
  DAT_180029e00 = 0;
  uRam0000000180029e08 = 0;
  _DAT_180029e10 = 7;
  DAT_180029e18 = 8;
  _DAT_180029de0 = 0x3f800000;
  FUN_180008eb0(&DAT_180029df8,0x10,DAT_180029de8);
  _DAT_180029e20 = 0;
  DAT_180029e28 = (void *)0x0;
  DAT_180029e30 = 0;
  DAT_180029e28 = operator_new(0x30);
  *(void **)DAT_180029e28 = DAT_180029e28;
  *(void **)((longlong)DAT_180029e28 + 8) = DAT_180029e28;
  DAT_180029e38 = 0;
  DAT_180029e40 = 0;
  uRam0000000180029e48 = 0;
  _DAT_180029e50 = 7;
  DAT_180029e58 = 8;
  _DAT_180029e20 = 0x3f800000;
  FUN_180006890(&DAT_180029e38,0x10,DAT_180029e28);
  atexit(FUN_18001a120);
  return;
}

