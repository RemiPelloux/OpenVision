
/* Address: 0x180019700; Evidence: ev_89418c73506f23e97f1e6a288f48b461929f945a4bbe4be9575ffdac61472c98 */

undefined8 FUN_180019700(undefined8 param_1,longlong param_2)

{
  undefined8 *puVar1;
  longlong *plVar2;
  
  puVar1 = (undefined8 *)(**(code **)(**(longlong **)(param_2 + 0x28) + 8))();
  FUN_180005810((undefined8 *)(param_2 + 0x48),puVar1);
  plVar2 = (longlong *)(*(longlong *)(param_2 + 0x20) + 0x48);
  if (plVar2 != (longlong *)(param_2 + 0x48)) {
    puVar1 = (undefined8 *)(param_2 + 0x48);
    if (0xf < *(ulonglong *)(param_2 + 0x60)) {
      puVar1 = *(undefined8 **)(param_2 + 0x48);
    }
    FUN_1800060c0(plVar2,puVar1,*(ulonglong *)(param_2 + 0x58));
  }
  FUN_180005790((longlong *)(param_2 + 0x48));
  return 0;
}

