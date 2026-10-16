
/* Address: 0x180002d40; Evidence: ev_8fa24dfa960f9e022935100fcd4c0be2f32e547a0302953a6d49b3d9ebb07db9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180002d40(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  undefined8 local_28;
  undefined8 local_20;
  undefined1 local_18 [24];
  
  local_28 = *(undefined8 *)param_2[1];
  local_20 = *(undefined8 *)param_2[2];
  lVar1 = (**(code **)*param_2)(local_18,local_28,&local_28);
  return *(undefined8 *)(lVar1 + 8);
}

