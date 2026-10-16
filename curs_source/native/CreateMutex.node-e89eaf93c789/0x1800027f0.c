
/* Address: 0x1800027f0; Evidence: ev_386725a064c16abbc3d3a3f6791c6c092ce666fa0761c4098e74636784f163f4 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800027f0(undefined8 *param_1)

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

