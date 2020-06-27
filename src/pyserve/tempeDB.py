# -*- coding:utf-8 -*


import mysql.connector as MS
import logging


class TempeDB(object):
    '''la base de données t-home
    '''
    def __init__(self, host = 'localhost', user = '', password = '', bdd = 'tempeDB'):
        self.bdd = bdd
        self.connection = MS.connect(user=user, host = host, buffered = True)

    def historique(self, id, date_debut=None, date_fin = None):
        '''Renvoie l'historique d'un capteur entre date_debut et date_fin
        sous la forme d'une liste [[date, valeur]]
        '''
        cursor = self.connection.cursor()
        cursor.execute('USE %s'%self.bdd)
        logging.debug("Requete sur %s : id=%s, date_debut = %s, date_fin = %s"%(self.bdd, id, date_debut, date_fin))
        req = ("SELECT date, temperature FROM mesures WHERE capteur = %s ")
        params = (id,)
        if date_debut:
            req += "AND date > %s"
            params += (date_debut,)
        if date_fin:
            req += "AND date < %s"
            params += (date_fin,)
        logging.debug("Req : %s %s"%(req,params))
        cursor.execute(req, params)
        results =  cursor.fetchall()
        cursor.close()
        #row_headers=[x[0] for x in cur.description]
        data = []
        for result in results:
            data.append([str(v) for v in result])
        logging.debug(data)
        return data
