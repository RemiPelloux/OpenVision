
/* Address: 0x1800054f8; Evidence: ev_de16bb44b71713079569c91eff2cb0ba0a2efef9359e35786ef030d75c4c7fd2 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001a2b8) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

