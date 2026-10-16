
/* Address: 0x180004b50; Evidence: ev_03a9ec298b554233bb376e827c4820ddd4e3ecee160c514cdd71058fb85a4f92 */

void FUN_180004b50(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_180001e50();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_180004b48();
  *puVar1 = *puVar1 | 2;
  return;
}

