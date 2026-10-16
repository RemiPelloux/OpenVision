
/* Address: 0x180002bf0; Evidence: ev_52ac8f040394d781915d42f225c43787cade7487c90d2683ca2ffc6400997b94 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180002bf0(undefined8 *param_1)

{
  longlong lVar1;
  undefined8 local_28;
  undefined8 local_20;
  undefined1 local_18 [24];
  
  local_28 = *(undefined8 *)param_1[1];
  local_20 = *(undefined8 *)param_1[2];
  lVar1 = (**(code **)*param_1)(local_18,local_28,&local_28);
  return *(undefined8 *)(lVar1 + 8);
}

