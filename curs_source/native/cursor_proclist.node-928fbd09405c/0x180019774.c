
/* Address: 0x180019774; Evidence: ev_5f6aebfdfc2c3bf9f4dca3bb8a7277fe11d6c22d87eb49505d03d092ae144c57 */

undefined8 FUN_180019774(undefined8 param_1,longlong param_2)

{
  longlong *plVar1;
  undefined8 *puVar2;
  
  FUN_180005810((undefined8 *)(param_2 + 0x68),
                (undefined8 *)"cursor_proclist_scan_async: unknown error");
  plVar1 = (longlong *)(*(longlong *)(param_2 + 0x20) + 0x48);
  if (plVar1 != (longlong *)(param_2 + 0x68)) {
    puVar2 = (undefined8 *)(param_2 + 0x68);
    if (0xf < *(ulonglong *)(param_2 + 0x80)) {
      puVar2 = *(undefined8 **)(param_2 + 0x68);
    }
    FUN_1800060c0(plVar1,puVar2,*(ulonglong *)(param_2 + 0x78));
  }
  FUN_180005790((longlong *)(param_2 + 0x68));
  return 0;
}

