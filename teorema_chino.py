a="Sistemas Lineales de Congruencia"
pretty_print(html(a))
b="Defina los siguientes valores para obtener la(s) solucion(es) general(es) de un sistema lineal de congruencia (tres ecuaciones modulares simultáneas). Asegúrese que los módulos a consider sean los apropiados para que el sistema tenga solución. "
pretty_print(html(b))
@interact(layout=[['a_1','n_1'],['a_2','n_2'],['a_3','n_3']])
def enteros(a_1=('\(a_1\)',1), a_2=('\(a_2\)',2), a_3=('\(a_3\)',3), n_1=('\(n_1\)',5), n_2=('\(n_2\)',6), n_3=('\(n_3\)',7)):
    try:
        answer=[]
        for i in [1..n_1*n_2*n_3]:
            if (i%n_1==a_1) and (i%n_2==a_2) and (i%n_3==a_3):
             answer.append(i)
               
        str1 = "$x\equiv %s \\text{ (mod }%s)$"%(a_1,n_1) 
        str2 = "$x\equiv %s \\text{ (mod }%s)$"%(a_2,n_2) 
        str3 = "$x\equiv %s \\text{ (mod }%s)$"%(a_3,n_3)
               
        pretty_print(("El sistema lineal de congruencias "))
        pretty_print(html(str1+"          "+str2+"                "+str3))
        if len(answer)==0:
            pretty_print(("no tiene solución"))
        else:
            pretty_print(("tiene solucion(es) de la forma"))
            for ans in answer:
                pretty_print(html("$%s$ (mod $%s)$"%(ans,n_1*n_2*n_3)))
    except ValueError, e:
            pretty_print(("Sage entregará el siguiente mensaje de error: asegurate que los módulos sean apropiados para que el sistema tenga solución"))
            pretty_print(html(e))