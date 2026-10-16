
/* Address: 0x1800025a0; Evidence: ev_fdc24259d8981f0ff22972c5801f98d5f737a3c4d083ce282833dc5a6eb6fd98 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800025a0(int *param_1)

{
  byte *pbVar1;
  
  if (((((param_1 != (int *)0x0) && (*param_1 == -0x1f928c9d)) && (param_1[6] == 4)) &&
      ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
     (pbVar1 = *(byte **)(param_1 + 0xc), pbVar1 != (byte *)0x0)) {
    if (*(int *)(pbVar1 + 4) == 0) {
      if (((*pbVar1 & 0x10) != 0) && ((longlong *)**(longlong **)(param_1 + 10) != (longlong *)0x0))
      {
        (**(code **)(*(longlong *)**(longlong **)(param_1 + 10) + 0x10))();
      }
    }
    else {
      FUN_180002614(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}

