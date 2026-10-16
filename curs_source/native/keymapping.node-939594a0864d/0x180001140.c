
/* Address: 0x180001140; Evidence: ev_30a952a482c755fa7f9ad93d645eebfb4b10af059f4e26481b07a8f271929cef */

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

