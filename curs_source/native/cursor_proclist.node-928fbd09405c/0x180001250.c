
/* Address: 0x180001250; Evidence: ev_405d1fe09a483c490bb6fec6d676d4f88b50d76f8c789fc295496a6d1038471c */

void FUN_180001250(void)

{
  code *pcVar1;
  longlong *plVar2;
  undefined8 local_18 [3];
  
  plVar2 = FUN_180001220(local_18);
  FUN_180001180(plVar2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

