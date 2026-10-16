
/* Address: 0x180001140; Evidence: ev_a72751b35710454c64daab2c91e41202f5373e2ea506cfe3e5efc7c3151d27fc */

void FUN_180001140(void)

{
  code *pcVar1;
  longlong *plVar2;
  undefined8 local_18 [3];
  
  plVar2 = FUN_180001120(local_18);
  FUN_180001070(plVar2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

