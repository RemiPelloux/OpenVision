
/* Address: 0x180003040; Evidence: ev_c0d57c18edca316f77aed7d46d7d0bb37fa7de33d4ade72c9e683454645431bf */

void FUN_180003040(longlong param_1,undefined8 *param_2)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  int iVar3;
  undefined8 *puVar4;
  char local_res8 [8];
  undefined8 local_58;
  undefined8 local_50;
  undefined8 local_48 [2];
  undefined8 local_38 [2];
  undefined8 local_28 [2];
  undefined8 local_18 [2];
  
  if (*(longlong *)(param_1 + 0x38) != 0) {
    puVar1 = (undefined8 *)(param_1 + 0x30);
    FUN_180002160(param_2,local_38);
    puVar4 = FUN_180005210((undefined8 *)(param_1 + 0x18),local_28);
    uVar2 = puVar4[1];
    FUN_1800028c0(&local_58,*puVar1);
    puVar4 = FUN_180005210(puVar1,local_18);
    FUN_180001c40(puVar4,local_48,uVar2);
    iVar3 = napi_is_exception_pending(local_58,local_res8);
    if ((iVar3 == 0) && (local_res8[0] != '\0')) {
      FUN_180005210(puVar1,local_18);
      iVar3 = napi_close_escapable_handle_scope(local_58,local_50);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope",
                      "napi_close_escapable_handle_scope");
      }
    }
    else {
      FUN_1800029d0(&local_58,local_18);
      iVar3 = napi_close_escapable_handle_scope(local_58,local_50);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope",
                      "napi_close_escapable_handle_scope");
      }
    }
  }
  return;
}

