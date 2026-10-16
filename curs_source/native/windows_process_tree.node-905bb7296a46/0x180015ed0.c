
/* Address: 0x180015ed0; Evidence: ev_45bb544807bc185a192d977b5ebaa3693162697ce7198b9f1fb872821ea89c51 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180015ed0(undefined8 param_1,longlong param_2)

{
  undefined1 (*pauVar1) [32];
  
  pauVar1 = (undefined1 (*) [32])(**(code **)(**(longlong **)(param_2 + 0x28) + 8))();
  FUN_180004a60((undefined1 (*) [32])(param_2 + 0x30),pauVar1);
  FUN_180003d90(*(longlong *)(param_2 + 0x20),(undefined1 (*) [32])(param_2 + 0x30));
  FUN_180002f40((longlong *)(param_2 + 0x30));
  return 0;
}

